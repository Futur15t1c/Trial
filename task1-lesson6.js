class Voter {
    constructor(age) {
        this.age = age
    }
    canVote() {
        return this.age >= 18
    }


}
const voter1 = new Voter(27)
console.log(voter1.canVote())