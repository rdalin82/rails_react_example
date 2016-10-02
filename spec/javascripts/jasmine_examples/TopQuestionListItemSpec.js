describe("TopQuestionsListItem", function(){
  var question;

  beforeEach(function(){
    question = React.createElement(TopQuestionsListItem, { question: {q: "yo?"}, answers: ["yo"] } );
  });
  
  it ("should have a answer", function(){
    expect(question.props.answers).toEqual(["yo"]);
  })
  it ("should have a question", function(){
    expect(question.props.question).toEqual({q: "yo?"});
  })
})