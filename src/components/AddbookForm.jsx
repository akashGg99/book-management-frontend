import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddbookForm() {


  const cstyle = { padding: 100 }

  return (
    <Form style={cstyle}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Book Title</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">
          think of a unique name for your book
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Book Author</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Book Description</Form.Label>
        <Form.Control type="text" placeholder="" />

      </Form.Group>

      <FormGroup className='mb-3'>
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">Science</option>
          <option value="2">Fiction</option>
          <option value="3">Art</option>
        </Form.Select>
      </FormGroup>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddbookForm;