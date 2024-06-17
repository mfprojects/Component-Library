import Dialogus from '@/components/Dialog/Dialogus';
const BasicPage = () => {
  const handleSubmit = (data: [string, string]) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>Welcome to the Fake Homepage</h1>
      <p>This is a minimalistic example of a fake homepage.</p>
      <button>Click me!</button>
      <Dialogus
        trigger="Open Dialog"
        title="Example Dialog"
        description="This is an example dialog in the fake homepage."
        field1_title="Field 1"
        field1_content="Value 1"
        field2_title="Field 2"
        field2_content="Value 2"
        onSubmit={handleSubmit}
        submitButton="Submit"
      />
    </div>
  );
};

export default BasicPage;
