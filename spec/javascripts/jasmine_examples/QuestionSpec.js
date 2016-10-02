describe("QuestionsShow", function(){
  var question;
  beforeEach(function(){
    question = React.createElement(QuestionsShow, { question: {q1: "how do you say hi?" }, answer: "yo", questions:[]});
  });

  it ("should have valid element", function(){
    expect(question.props.answer).toEqual("yo");
  })
  it ("should have an empty array of questions", function(){
    expect(question.props.questions).toEqual([]);
  })
  it ("should have a questions", function(){
    expect(question.props.question.q1).toEqual("how do you say hi?");
  })
  it ("should not have foo", function(){
    expect(question.props.foo).toBeFalsy();
  })
})