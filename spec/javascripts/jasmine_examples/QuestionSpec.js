describe("QuestionsShow", function(){
  var question;
  beforeEach(function(){
    question = React.createElement(QuestionsShow, {answer: "yo", questions:[]});
  });

  it ("should have valid element", function(){
    expect(question.props.answer).toEqual("yo");
  })
  it ("should have an empty array of questions", function(){
    expect(question.props.questions).toEqual([]);
  })
})