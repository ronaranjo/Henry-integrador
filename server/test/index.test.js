const app = require('../src/app');
const session = require('supertest');
const agent = session(app);


describe('Test de RUTAS', () => { 

    describe('GET /rickandmorty/character/:id', () => { 
        it("Responde con status: 200", async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        })
    
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const {body} = await agent.get("/rickandmorty/character/1")
            expect(body).toHaveProperty("id")
            expect(body).toHaveProperty("name")
            expect(body).toHaveProperty("species")
            expect(body).toHaveProperty("gender")
            expect(body).toHaveProperty("status")
            expect(body).toHaveProperty("origin")
            expect(body).toHaveProperty("image")
            })

        it('Si hay un error responde con status: 500', async ()=>{
            const {body} = await agent.get("/rickandmorty/character/a")
           
            expect(body).toHaveProperty("error", "Request failed with status code 500")
        })
        })
    
    describe("GET /rickandmorty/login", ()=>{
        it("Debe retornar un objeto con la propiedad access: true", async ()=>{
            const {body} = await agent.get("/rickandmorty/login/?email=ejemplo@gmail.com&password=password123")
           
            expect(body).toHaveProperty("access", true)
        })
        it("Debe retornar un objeto con la propiedad access: false", async ()=>{
            const {body} = await agent.get("/rickandmorty/login/?email=ejemplo@gmail123.com&password=password123123")
           
            expect(body).toHaveProperty("access", false)
        })
        
    })

    describe('POST/rickandmorty/fav', () => {
        let char1 = {id:1, name:"Rick"}
        let char2 = {id:2, name: "Morty"}

        it("Debe devolver el personaje enviado en un arreglo", async () => {
            const {body} = await agent.post("/rickandmorty/fav").send(char1)

            expect(body).toBeInstanceOf(Array)
            expect(body).toContainEqual(char1)
        })

        it("Debe devolver los personajes enviados en un arreglo", async () => {

            const {body} = await agent.post("/rickandmorty/fav").send(char2)

            expect(body).toBeInstanceOf(Array)
            expect(body).toContainEqual(char1)
            expect(body).toContainEqual(char2)
        })

        describe("DELETE /rickandmorty/fav/:id", () => {
    
            it("Devuelve el arreglo sin modificar al enviar un id inexistente", async () => {
    
                const {body} = await agent.delete("/rickandmorty/fav/6")
                
                expect(body).toBeInstanceOf(Array)
                expect(body).toContainEqual(char1)
                expect(body).toContainEqual(char2)

            })

            it("Devuelve el arreglo sin el personaje eliminado", async () => {
    
                const {body} = await agent.delete("/rickandmorty/fav/1")
                
                expect(body).toBeInstanceOf(Array)
                expect(body).not.toContainEqual(char1)
                expect(body).toContainEqual(char2)

            })
        })

    })


    
        
 })