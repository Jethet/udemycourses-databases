const postStudent = (req, res) => {
  const studentName = req.body.students_name ;
  const topicId = req.body.volunteer_id;
  const startTime = req.body.avatar_id;
  
    const query = 'INSERT INTO students (students_name, volunteer_id, avatar_id)  VALUES ($1, $2, $3)';
    pool
    .query(query, [studentName, topicId, startTime])
    .then(() => res.send('Student created! 😉'))
    .catch(error => {
      console.log(error);
      res.send('Oops.We did it again. 😕')
    })
}
const postClass = (req, res) => {
  const className = req.body.class_name ;
  const topicId = req.body.topic_id;
  const startTime = req.body.start_time;
  const endTime = req.body.end_time ;
  const query = 'INSERT INTO classes (class_name, topic_id, start_time, end_time) VALUES ($1, $2, $3, $4)';
  pool
  .query(query, [className, topicId, startTime,endTime])
  .then(() => response.send("Class created! 😉"))
  .catch(error => {
    console.log(error);
    res.send('Oops.We did it again. 😕')
  })
}
const postTopic = (req, res) => {
  const topicName = req.body.topic_name ;
  const query = 'INSERT INTO topics (topic_name)  VALUES ($1)';
  pool
  .query(query, [topicName])
  .then(() => res.send('Topic created! 😉'))
  .catch(error => {
    console.log(error);
    res.send('Oops.We did it again. 😕')
  })
}
const postStudentIntoClass = (req, res) => {
  const studentId = req.body.student_id ;
  const classId = req.body.class_id ;
  const query = 'INSERT INTO students_classes (student_id, class_id)  VALUES ($1, $2)';
  pool
  .query(query, [studentId,classId])
  .then(() => res.send('Student assigned to class! 😉'))
  .catch(error => {
    console.log(error);
    res.send('Oops.We did it again. 😕')
  })
}