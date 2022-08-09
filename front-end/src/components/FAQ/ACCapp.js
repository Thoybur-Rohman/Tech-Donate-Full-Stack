import Accordion from './Accordion';

function FAQApp() {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <Accordion allowMultipleOpen>
        <div label='How can I reset my Password?' isOpen>
          <p>
            <strong>ANS:</strong> You can change your password by clicking on the link "Forget Password?" on the Login page.
          </p>
         
          
        </div>
        <div label='Would I need to come collect my device?'>
          <p>
            <strong>ANS:</strong> No, your device will be posted to you as soon as you are allotted one.
          </p>
          
        </div>

        <div label='Will I get to keep the device?'>
          <p>
            <strong>ANS:</strong> Yes, the device will be all yours to keep.
          </p>
         
          
        </div>

        <div label='How will I know if I have been selected for a device?'>
          <p>
            <strong>ANS:</strong> You will be sent an automated email once you haver been selected.
          </p>
         
          
        </div>

        <div label='How do I report faulty devices?'>
          <p>
            <strong>ANS:</strong> You can report your faulty devices on our email 'TechDonate1@gmail.com'.
          </p>
         
          
        </div>
      </Accordion>
    </div>
  );
}
export default FAQApp;