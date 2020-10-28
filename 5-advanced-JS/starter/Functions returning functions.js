// Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ', what subject do you teach?');
        }

    } else {
        return function (name) {
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
interviewQuestion('designer')('Mark');