// +++++++++++++++++ Prototypal inheritance +++++++++++++++++++++

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport         // TASupport inheriting TeachingSupport
}

Teacher.__proto__ = User            // Teacher inheriting User



// +++++++++ modern syntax +++++++++++++++

Object.setPrototypeOf(TeachingSupport, Teacher)