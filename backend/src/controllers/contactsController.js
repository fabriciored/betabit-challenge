const { Router } = require('express');

const { Contact } = require('../models');

const router = Router();

router.get('/', async (request, response) => {
    const contacts = await Contact.findAll()
    response.status(200).json(contacts)
})

router.get('/:id', async (request, response) => {
    const contacts = await Contact.findByPk(request.params.id)
    response.status(200).json(contacts)
})

router.post('/', async (request, response) => {
    const {name, phone, email, image} = request.body
    const newContact = Contact.create({name, phone, email, image})

    response.status(200).json({message: 'Contact added', content: `${newContact}`})
})

router.put('/:id', async(request, response) => {
    const {name, phone, email, image} = request.body

    await Contact.update(
        {
            name, phone, email, image
        },
        {
            where: {
                id: request.params.id
            }
        }
    )
    response.status(200).json({message: 'Contact updated'})
})


router.delete('/:id', async(request, response) => {
    await Contact.destroy({
        where: {
            id: request.params.id
        }
    })
    response.status(200).json({message: 'Contact deleted', deleted: `${request.params.id}`})
})


module.exports = router;