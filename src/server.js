import { createServer, Model } from "miragejs";

// createServer: it is use to create server like server of backend
createServer({
  // لجعل المسارات ديناميكيه في حاله تغير اسم الابي ايه البيانات لا تتاثر

  models: {
    vans: Model,
  },

  // عشان اكريت داتا بشكل داينامك ممكن اضيف عليها وامسح منها بدن اعاده كتابه الهيكل كله من الاول

  seeds(server) {
    server.create("van", {
      id: "1",
      name: "Modest Explorer",
      price: 60,
      description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
      type: "simple",
    });
    server.create("van", {
      id: "2",
      name: "Beach Bum",
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
      type: "rugged",
    });
    server.create("van", {
      id: "3",
      name: "Reliable Red",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
      type: "luxury",
    });
    server.create("van", {
      id: "4",
      name: "Dreamfinder",
      price: 65,
      description:
        "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
      type: "simple",
    });
    server.create("van", {
      id: "5",
      name: "The Cruiser",
      price: 120,
      description:
        "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
      type: "luxury",
    });
    server.create("van", {
      id: "6",
      name: "Green Wonder",
      price: 70,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
      type: "rugged",
    });
  },

  // routes: it is use to create apis url lik => (get, post, update, delete, ....)
  routes() {
    this.namespace = "api";

    // جيت بتاخد اليو ار ال بتاع ال ابي ايه و عنصر اسمه اسكيمه فيه نسخه من الداتا بيز الوهميه بتاعت السيرفر
    // vans: اسم المودل الي متخزن فيه الداتا
    this.get("/vans", (schema) => {
      return schema.vans.all();
    });

    // request: باخد منها اي ديه عشان ادور علي نفس فان بنفس الاي ديه دا واعرض بياناته
    this.get("/vans/:id", (schema, request) => {
      const id = request.params.id;
      return schema.vans.find(id);
    });
  },
});

/* 
// باخد العنصر الي انشاءته عشان اكريته في الداتا بيز كنصر جديد 
this.post("/movies", (schema, request) => {
  let attrs = JSON.parse(request.requestBody)
  return schema.movies.create(attrs)
})

// باخد العنصر الي عدلته عشان اعدلها في الداتا بيز كنصر متعدل 
this.patch("/movies/:id", (schema, request) => {
  let newAttrs = JSON.parse(request.requestBody)
  let id = request.params.id
  let movie = schema.movies.find(id)
  return movie.update(newAttrs)
})

// request: باخد منها اي ديه عشان ادور علي نفس فان بنفس الاي ديه دا وامسحه بياناته من الداتا بيز الوهميه 
this.delete("/movies/:id", (schema, request) => {
  let id = request.params.id
  return schema.movies.find(id).destroy()
})

    // Using the `Response` class to return a 500, 200, 201, 400, .....
    this.delete("/movies/1", () => {
      let headers = {};
      let data = { errors: ["Server did not respond"] };
      return new Response(500, headers, data);
    });
*/
