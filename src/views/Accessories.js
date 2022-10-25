import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import accessory1 from '../assets/accessory1.jpg'
import accessory2 from '../assets/accessory2.jpg'
import accessory3 from '../assets/accessory3.jpg'
import accessory4 from '../assets/accessory4.jpg'
import accessory5 from '../assets/accessory5.jpg'
import accessory6 from '../assets/accessory6.jpg'
import accessory7 from '../assets/accessory7.jpg'
import accessory8 from '../assets/accessory8.jpg'
import accessory9 from '../assets/accessory9.jpg'

export default function Accessories() {
    return (
        <div className='container text-center'>
            <h1>Accessories</h1>
            <div>
                <CardGroup className='container m-3 border-0'>
                    <Card className='border-0'>
                        <Card.Img variant="top" src={accessory1} />
                        <Card.Body>
                            <Card.Title><h4>Pokémon TCG: Pikachu Comic-Style Playmat</h4></Card.Title>
                            <Card.Text>
                                Electrify your Pokémon TCG matches with a little help from the Mouse Pokémon and friends!
                                A comic-style print with Pikachu, Gengar, and more dazzles on this playmat that's just the right size for even the fiercest of battles.
                                When you aren't playing, it's a perfect way to add Pokémon panache to your workspace.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='border'>
                            <medium className="text-warning">$24.99</medium>
                        </Card.Footer>
                    </Card>
                    <Card className='border-0'>
                        <Card.Img variant="top" src={accessory2} />
                        <Card.Body>
                            <Card.Title><h4>Pokémon TCG: Gigantamax Charizard Double Deck Box</h4></Card.Title>
                            <Card.Text>
                                Gigantamax Charizard is a huge and imposing presence on this double deck box! In a towering, powerful pose, the fiery Pokémon decorates 
                                two deck boxes nested in a convenient, sturdy case that also comes with three dividers to help organize your cards and accessories.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='border'>
                            <medium className="text-warning">$12.99</medium>
                        </Card.Footer>
                    </Card>
                    <Card className='border-0'>
                        <Card.Img variant="top" src={accessory3} />
                        <Card.Body>
                            <Card.Title><h4>Pokémon TCG: Gyarados Breakaway Card Sleeves</h4></Card.Title>
                            <Card.Text>
                                The ferocious Atrocious Pokémon, Gyarados, has appeared to protect your deck in battle! These sleeves feature Gyarados front and center 
                                on an orange background with a Magikarp pattern.
                                Better still, this set of sleeves is enough for a full deck plus some extras, just in case. Show them off at your next convention, tournament, or battle!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='border'>
                            <medium className="text-warning">$7.99</medium>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <CardGroup className='container m-3'>
                    <Card className='border-0'> 
                        <Card.Img variant="top" src={accessory4} />
                        <Card.Body>
                            <Card.Title><h4>Pokémon TCG: Pokémon Trainers Double Deck Box</h4></Card.Title>
                            <Card.Text>
                                Protect your favorite decks with a little help from your friends! Keep your cards in battle-ready condition with this 
                                double deck box starring some of your favorite Trainers and their Pokémon pals. Rounded, cute depictions of these beloved characters make 
                                this a fun way to display your Pokémon TCG collection.
                                Dividers and a magnetic closure keep everything in its place—this box is sure to delight players and collectors alike.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='border'>
                            <medium className="text-warning">$12.99</medium>
                        </Card.Footer>

                    </Card>
                    <Card className='border-0'>
                        <Card.Img variant="top" src={accessory5} />
                        <Card.Body>
                            <Card.Title><h4>Pokémon TCG: Pikachu Adventure Double Deck Box</h4></Card.Title>
                            <Card.Text>

                            Pikachu is full of energy as it sets out for a big adventure on this colorful, joyous double deck box! 
                            A beautiful illustrated style decorates two deck boxes nested in a convenient, 
                            sturdy case that also comes with three dividers to help organize your cards and accessories.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='border'>
                            <medium className="text-warning">$12.99</medium>
                        </Card.Footer>
                    </Card>
                    <Card className='border-0'> 
                        <Card.Img variant="top" src={accessory6} />
                        <Card.Body>
                            <Card.Title><h4>Pokémon TCG: Pikachu & Friends Pokémon Sweet Temptations Playmat</h4></Card.Title>
                            <Card.Text>
                            A sweet treat lures Pikachu and friends into an eerie forest filled with Ghost types on this mat that’s sized right for even the fiercest of Pokémon TCG battles. 
                            And when you aren’t playing, add it to your workspace for whimsical style and plenty of Pokémon charm!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='border'>
                            <medium className="text-warning">$24.99</medium>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <CardGroup className='container m-3'>
                <Card className='border-0'> 
                        <Card.Img variant="top" src={accessory7} />
                        <Card.Body>
                            <Card.Title><h4>Pokémon TCG: Trubbish & Garbodor Crossing Card Sleeves</h4></Card.Title>
                            <Card.Text>
                            Trubbish and Garbodor are on their way to add the smell of victory to your next TCG match! These sleeves feature the Poison-type duo colored in a tan hue with caution signs on a blue gradient background. Better still, 
                            this set of sleeves is enough for a full deck plus some extras, just in case. Show them off at your next convention, tournament, or battle!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='border'>
                            <medium className="text-warning">$7.99</medium>
                        </Card.Footer>
                    </Card>
                    <Card className='border-0'> 
                        <Card.Img variant="top" src={accessory8} />
                        <Card.Body>
                            <Card.Title><h4>Pokémon TCG: Shinx Evolution Electro-Stack Playmat</h4></Card.Title>
                            <Card.Text>
                            Shinx and its Evolutions are ready for battle on this playmat featuring Shinx, Luxio, and Luxray with one in front of the other on a dark blue background. At about two feet wide, 
                            it gives you plenty of room to elevate your game and makes a great desk pad between tournaments to brighten up any space.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='border'>
                            <medium className="text-warning">$24.99</medium>
                        </Card.Footer>
                    </Card>
                    <Card className='border-0'> 
                        <Card.Img variant="top" src={accessory9} />
                        <Card.Body>
                            <Card.Title><h4>Pokémon TCG: Hoopa Unbound Deck Box</h4></Card.Title>
                            <Card.Text>
                            A Hoopa Unbound deck box protects your cards and shows off your power!
Keep your cards safe—and looking great—in the Pokémon Trading Card Game: Hoopa Unbound Deck Box! This colorful deck box shows off the awesome power of Hoopa Unbound, with a snap Velcro closure and two dividers—perfect for both players and collectors!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='border'>
                            <medium className="text-warning">$5.99</medium>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
}
