const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class NotesController {
  async create(request, response) {
    const { title, description,rating, tags } = request.body;
    const { user_id } = request.params;
    const database = await sqliteConnection();
   
    const checkNotesExists = await database.get(
      "SELECT * FROM notes WHERE title = (?) AND user_id = (?)",
      [title, user_id]
    )

    if (checkNotesExists) {
      throw new AppError("Já existe uma observação sobre filme.");
    }
   
   const ratingMovies = rating;

   if(ratingMovies > 5 || ratingMovies < 1 ){
    throw new AppError("A nota deve ser de 1 a 5");
   }

    const [note_id] = await knex("notes").insert({
      title,
      description,
      rating,
      user_id,
    });

    const tagsInsert = tags.map((name) => {
      return {
        note_id,
        name,
        user_id,
      };
    });
    await knex("tags").insert(tagsInsert);

   return response.json();
  }

  async show(request, response) {
    const { user_id } = request.params;
  
    const notes = await knex("notes").where({ user_id });
    const tagsPromises = notes.map(note => {
      return knex("tags").where({ note_id: note.id }).orderBy("name");
    });
  
    const tagsArray = await Promise.all(tagsPromises);
  
    const notesWithTags = notes.map((note, index) => {
      return {
        ...note,
        tags: tagsArray[index]
      };
    });
  
    return response.json(notesWithTags);
  }
  

  async delete(request, response) {
    const { id } = request.params;

    await knex("notes").where({ id }).delete();
    return response.json();
  }

  async index(request, response) {
    const { title, user_id, tags } = request.query;
    let notes;

    if (tags) {
      const filterTags = tags.split(",").map((tag) => tag.trim());

      notes = await knex("tags")
        .select(["notes.id", "notes.title", "notes.user_id"])
        .where("notes.user_id", user_id)
        .whereLike("notes.title", `%${title}%`)
        .whereIn("name", filterTags)
        .innerJoin("notes", "notes.id", "tags.note_id")
        .orderBy("notes.title");
    } else {
      notes = await knex("notes")
        .where({ user_id })
        .whereLike("title", `%${title}%`)
        .orderBy("title");
    }
    
    const userTags = await knex("tags").where({ user_id });
    const notesWithTags = notes.map(note => {
      const noteTags = userTags.filter(tag => tag.note_id === note.id);
      return {
        ...note,
        tags: noteTags
      };
    });

    return response.json(notesWithTags);
  }
}

module.exports = NotesController;
