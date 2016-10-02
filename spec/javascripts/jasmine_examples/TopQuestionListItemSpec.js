describe("TopQuestionsListItem", function(){
  var question;

  beforeEach(function(){
    question = React.createElement(TopQuestionsListItem, { question: {votes: 0, answers_count: 0, views: 0, title: "what is up"}, answers: ["yo"] } );
  });
  
  it ("should have a answer", function(){
    expect(question.props.answers).toEqual(["yo"]);
  })
  it ("should have a question title", function(){
    expect(question.props.question.title).toEqual("what is up");
  })
})