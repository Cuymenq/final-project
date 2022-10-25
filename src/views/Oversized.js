import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import oversized1 from '../assets/oversized1.jpg'
import oversized2 from '../assets/oversized2.jpg'
import oversized3 from '../assets/oversized3.jpg'
import oversized4 from '../assets/oversized4.jpg'
import oversized5 from '../assets/oversized5.jpg'
import oversized6 from '../assets/oversized6.jpg'
import oversize from '../assets/oversize.png'

const Overized = () => {
  return (
    <div className='container text-center'>
      <img src={oversize} />
      <div>
        <CardGroup className='container m-3'>
          <Card className='border-0'>
            <Card.Img variant="top" src={oversized1} />
            <Card.Body>
              <Card.Title><h4>Pokémon TCG: Shining Fates Collection (Pikachu V)</h4></Card.Title>
              <Card.Text>
                It’s easy to get excited about Pikachu V—and this collection features Pokémon TCG: Shining Fates booster packs and two versions of Pikachu,
                the famous little Pokémon that always does its best! It’s time to spin, charge, and electrify your collection with a super-powered Pikachu V.
              </Card.Text>
            </Card.Body>
            <Card.Footer className='border'>
              <medium className="text-warning">$19.99</medium>
            </Card.Footer>
          </Card>
          <Card className='border-0'>
            <Card.Img variant="top" src={oversized2} />
            <Card.Body>
              <Card.Title><h4>Pokémon TCG: Glaceon VSTAR Special Collection</h4></Card.Title>
              <Card.Text>
                See one of Eevee’s Evolutions in a stellar new light as it becomes Glaceon VSTAR, freezing over the opposition in a blizzard of strength
                with a once-per-game VSTAR Power! In this special collection, it’s ready to join your Pokémon TCG team, with both Glaceon V and Glaceon
                VSTAR appearing as foil promo cards—and you get an oversize version of Glaceon VSTAR for display! You’ll also find booster packs and a
                VSTAR marker you can use alongside Glaceon VSTAR in your next game.
              </Card.Text>
            </Card.Body>
            <Card.Footer className='border'>
              <medium className="text-warning">$29.99</medium>
            </Card.Footer>
          </Card>
          <Card className='border-0'>
            <Card.Img variant="top" src={oversized3} />
            <Card.Body>
              <Card.Title><h4>Pokémon TCG: Leafeon VSTAR Special Collection</h4></Card.Title>
              <Card.Text>
                See one of Eevee’s Evolutions in a stellar new light as it becomes Leafeon VSTAR, bursting with verdant strength and able to
                disrupt your opponent’s best-laid plans with a once-per-game VSTAR Power! In this special collection, it’s ready to join your Pokémon TCG team,
                with both Leafeon V and Leafeon VSTAR appearing as foil promo cards—and you get an oversize version of Leafeon VSTAR for display!
                You’ll also find booster packs and a VSTAR marker you can use alongside Leafeon VSTAR in your next game.
              </Card.Text>
            </Card.Body>
            <Card.Footer className='border'>
              <medium className="text-warning">$29.99</medium>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup className='container m-3'>
          <Card className='border-0'>
            <Card.Img variant="top" src={oversized4} />
            <Card.Body>
              <Card.Title><h4>Pokémon TCG: Hoopa V Box</h4></Card.Title>
              <Card.Text>
                With Mythical Pokémon power, Hoopa V is ready to juggle rings, reach across hyperspace, and find a place in your collection!
                This purple Pokémon stands out for its many arms and many strong attacks, and the Pokémon TCG: Hoopa V Box brings it straight
                to you, in both playable and display forms.
                When you want to make a powerful impression, grab Hoopa for your next deck, and put a little magic into your moves!
              </Card.Text>
            </Card.Body>
            <Card.Footer className='border'>
              <medium className="text-warning">$19.99</medium>
            </Card.Footer>

          </Card>
          <Card className='border-0'>
            <Card.Img variant="top" src={oversized5} />
            <Card.Body>
              <Card.Title><h4>Pokémon TCG: Pikachu V Box</h4></Card.Title>
              <Card.Text>
                Full of electrifying spirit, Pikachu V enters the battlefield with the tenacity to take on even the mightiest of Pokémon!
                This determined Pokémon V is ready to join your deck as a foil promo card, and spooky little Mimikyu offers backup with a foil card of its own.
                You’ll also find an oversize version of Pikachu V, plus even more cards in Pokémon TCG booster packs!
              </Card.Text>
            </Card.Body>
            <Card.Footer className='border'>
              <medium className="text-warning">$19.99</medium>
            </Card.Footer>
          </Card>
          <Card className='border-0'>
            <Card.Img variant="top" src={oversized6} />
            <Card.Body>
              <Card.Title><h4 >Pokémon TCG: Dragonite V Box</h4></Card.Title>
              <Card.Text>
              Dragonite V is an intelligent and powerful Pokémon capable of circling the globe in less than a day. 
              Trainers rarely see this Pokémon—and few are lucky enough to catch one! Now this sought-after Dragon type can stand beside you with the Dragonite V Box! 
              You’ll get the fierce but kindhearted Dragonite V in both playable and display sizes, as well as extra goodies from Pokémon TCG booster packs.
              </Card.Text>
            </Card.Body>
            <Card.Footer className='border'>
              <medium className="text-warning">$19.99</medium>
            </Card.Footer>
          </Card>
        </CardGroup>
        
      </div>
    </div>
  );
}


export default Overized