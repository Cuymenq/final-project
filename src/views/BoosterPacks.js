import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import booster1 from '../assets/boosterpack1.jpg'
import booster2 from '../assets/boosterpack2.jpg'
import booster3 from '../assets/boosterpack3.jpg'

const BoosterPacks = () => {
  return (
    <div>
      <div className='text-center my-3'>
        <h1>Booster Packs</h1>
      </div>
      <div className='text-center my-3'>
      <CardGroup>
        <Card  className='border-0'>
          <Card.Img variant="top" src={booster1} />
          <Card.Body>
            <Card.Title>Pokémon TCG: Sword & Shield-Fusion Strike Sleeved Booster Pack (10 Cards)</Card.Title>
            <Card.Text>
              The road ahead reveals limitless potential as the new Fusion Strike style emerges to harness the unbound spirit of Pokémon and Trainers alike! Adaptable new Pokémon V like Genesect V, Hoopa V, and Mew VMAX are eager for battle, while Single Strike and Rapid Strike Pokémon loom large as Rillaboom VMAX, Cinderace VMAX, and Inteleon VMAX appear in their Gigantamax forms.
              Go with the flow and discover powerful new strategies in Pokémon TCG: Sword & Shield—Fusion Strike!
            </Card.Text>
          </Card.Body>
          <Card.Footer className='border'>
            <small className="text-warning">$3.99</small>
          </Card.Footer>
        </Card>
        <Card  className='border-0'>
          <Card.Img variant="top" src={booster2} />
          <Card.Body>
            <Card.Title>Pokémon TCG: Sword & Shield-Vivid Voltage Sleeved Booster Pack (10 Cards)</Card.Title>
            <Card.Text>
              Discover new brilliance and maximum power in the Pokémon TCG: Sword & Shield—Vivid Voltage expansion as more
              Pokémon V appear, including the newly discovered Mythical Pokémon Zarude! Unique new
              Amazing Pokémon burst onto the scene with a rainbow splash, alongside more Pokémon VMAX…including
              the splendor, the majesty, the delightful round wonder that is Gigantamax Pikachu!
              Put a little color and a lot of spark into your deck or collection with the Sword & Shield—Vivid
              Voltage expansion!
            </Card.Text>
          </Card.Body>
          <Card.Footer className='border'>
            <small className="text-warning">$3.99</small>
          </Card.Footer>
        </Card>
        <Card  className='border-0'>
          <Card.Img variant="top" src={booster3} />
          <Card.Body>
            <Card.Title>Pokémon TCG: Sword & Shield-Chilling Reign Sleeved Booster Pack (10 Cards)</Card.Title>
            <Card.Text>
              Seize the advantage with Pokémon of the frozen lands, with the powerful Ice Rider Calyrex VMAX and Shadow Rider Calyrex VMAX—plus the Galarian forms of Articuno, Zapdos, and Moltres! Phantom hauntings, howling blizzards, and wild battles—expand the realms of your Pokémon strategy with new powers and new possibilities. Press on despite ghostly opposition, and claim total victory in the land of spectral snow with the Pokémon TCG: Sword & Shield—Chilling Reign expansion!
            </Card.Text>
          </Card.Body>
          <Card.Footer className='border'>
            <small className="text-warning">$3.99</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
    </div>
  );
}

export default BoosterPacks