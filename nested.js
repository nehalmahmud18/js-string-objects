const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'book fair'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
college.unique.result.merit ='top top most';
college.events[1] = '16 december';
console.log(college.events[1])
delete college.class;

console.log(college)
