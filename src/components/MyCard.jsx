import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard(props) {
  console.log(props);
  return (
    <>
      <Card style={{ width: '250px', display: 'inline-block', margin: '5px', padding: '5px' }} >
        <Card.Img variant="top" src={props.lnk} />
        <Card.Body>
          <Card.Title>{props.channel}</Card.Title>
          <Card.Text>
            {props.about}
          </Card.Text>
          {/* Giving default value if prop is not passed */}
          <Button variant="primary">{props.btnText || "Click Me!"}</Button>
        </Card.Body>
      </Card>


    </>
  );
}

export default MyCard;







{/* <div class="w-[300px] rounded-md border">
  <img
    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="Laptop"
    class="h-[200px] w-full rounded-md object-cover"
  />
  <div class="p-4">
    <h1 class="text-lg font-semibold">About Macbook</h1>
    <p class="mt-3 text-sm text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button
      type="button"
      class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Read
    </button>
  </div>
</div> */}