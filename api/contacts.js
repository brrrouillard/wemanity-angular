const router = require("express").Router();

const Contact = require("../models/Contact");

// Get all users
router.get("/", (req, res) => {
  Contact.find((err, contacts) => {
    if (err) console.log(err);
    res.status(200).send(contacts);
  });
});

router.post("/", (req, res) => {
  const regExp = /^[+][0-9][0-9][ ][0-9][0-9][ ][0-9]*/;
  if (req.body.number.match(regExp)) {
    const newContact = new Contact({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      number: req.body.number
    });

    newContact
      .save()
      .then(
        () => `Added contact ${newContact.firstName} ${newContact.lastName}`
      )
      .catch(err => res.status(400).send({ err }))
      .then(() => res.status(200).send({ msg: "OK" }));
  }
  else {
    res.status(400).send({MSG: "Number error"})
  }
});

router.get("/:contact", (req, res) => {
  Contact.find(
    {
      $or: [
        {
          number: {
            $regex: "^[+]" + req.params.contact.slice(1)
          }
        },
        {
          firstName: {
            $regex: "^" + req.params.contact
          }
        },
        {
          lastName: {
            $regex: "^" + req.params.contact
          }
        }
      ]
    },
    (err, contacts) => {
      if (err) res.status(400).send({ msg: "Error" + err });
      res.status(200).send(contacts);
    }
  );
});

router.get("/:number", (req, res) => {
  Contact.find({ number: req.params.number }, (err, contacts) => {
    if (err) res.status(400).send({ msg: "Error" + err });
    res.status(200).send(contacts);
  });
});

router.put("/:id", (req, res) => {
  Contact.findById(req.params.id, (err, contact) => {
    if (err) res.status(400).send({ msg: "Error " + err });
    contact.firstName = req.body.firstName;
    contact.lastName = req.body.lastName;
    contact.number = req.body.number;
    contact.save();
    res.status(200).send(contact);
  });
});

module.exports = router;
