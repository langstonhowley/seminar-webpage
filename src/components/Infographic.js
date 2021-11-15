import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import '../App.css'

class InfoGraphics extends React.Component {
  render () {
    return (
      <section id='why'>
        <div id='carousel-div'>
          <div style={{ paddingBottom: '1%' }}>
            <h1 style={{ color: 'dimgrey' }}>Why does this data matter?</h1>
            <h3 style={{ color: 'dimgrey' }}>
              The content belows explains why the data shown in the map is
              important
            </h3>
            <h6 style={{ color: 'dimgrey' }}>
              Use the side arrows to scroll through the slides or allow them to
              flow naturally. Slide count is displayed at the bottom
            </h6>
          </div>
          <Carousel id='carousel' variant='blue'>
            <Carousel.Item interval={null}>
              <img
                className='d-block w-100'
                src='/images/fig1.png'
                alt='Image One'
              />
              <Carousel.Caption>
                <div id='carousel-divider1'>
                  <h3 id='carousel-text'>
                    The above map you are looking at is a visualization of the
                    amount of habitat destroyed compared to biodiversity lost.
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className='d-block w-100'
                src='/images/fig2.png'
                alt='Image Two'
              />
              <Carousel.Caption>
                <div id='carousel-divider1'>
                  <h3 id='carousel-text'>
                    Biodiversity is a term that refers to the variety of all
                    life forms in a specified area
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className='d-block w-100'
                src='/images/fig3.png'
                alt='Image One'
              />
              <Carousel.Caption>
                <div id='carousel-divider2'>
                  <h3 id='carousel-text'>
                    Ecosystems, or a community of living things, is a fragile
                    network. Species usually fill specific roles in an ecosystem
                    which makes them reliant on the ecosystem and the ecosystem
                    reliant on the species within it.
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className='d-block w-100'
                src='/images/fig4.png'
                alt='Image Four'
              />
              <Carousel.Caption>
                <div id='carousel-divider1'>
                  <h3 id='carousel-text'>
                    If a species is wiped out there is a good chance that this
                    will hurt the other species around it.
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className='d-block w-100'
                src='/images/fig5.png'
                alt='Image Five'
              />
              <Carousel.Caption>
                <div id='carousel-divider1'>
                  <h3 id='carousel-text'>
                    If this were to happen, it could cause a cascade effect, in
                    which many species begin to die off.
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className='d-block w-100'
                src='/images/fig6.png'
                alt='Image Six'
              />
              <Carousel.Caption>
                <div id='carousel-divider2'>
                  <h3 id='carousel-text'>
                    This cascade could be referred to as a loss in biodiversity,
                    which could seriously damage the fragile ecosystem. In this
                    case, an ecosystem would not only lose many of the species,
                    but also lose its ability to provide natural resources that
                    we rely on.
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className='d-block w-100'
                src='/images/fig7.png'
                alt='Image Seven'
              />
              <Carousel.Caption>
                <div id='carousel-divider4'>
                  <h3 id='carousel-text'>
                    Even though loss in biodiversity is sad and it would be
                    unfortunate to lose the resources in a local area, it is
                    also a sign of a greater issue which could have an effect on
                    humanity and our sustainability
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className='d-block w-100'
                src='/images/fig8.png'
                alt='Image Eight'
              />
              <Carousel.Caption>
                <div id='carousel-divider1'>
                  <h3 id='carousel-text'>
                    Habitat destruction is one of the main causes of
                    biodiversity loss, so the question is what is the cause of
                    habitat destruction
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className='d-block w-100'
                src='/images/fig9.png'
                alt='Image Nine'
              />
              <Carousel.Caption>
                <div id='carousel-divider1'>
                  <h3 id='carousel-text'>
                    There are multiple factors, but most habitat destruction is
                    largely caused by human intervention.
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className='d-block w-100'
                src='/images/fig10.png'
                alt='Image Ten'
              />
              <Carousel.Caption>
                <div id='carousel-divider2'>
                  <h3 id='carousel-text'>
                    Sometimes habitat is destroyed by direct means, such as
                    deforestation, or the cutting down of large amounts of
                    trees, and other times it is by indirect means, such as
                    polluting the environment which can damage wildlife to the
                    point of decay
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className='d-block w-100'
                src='/images/fig11.png'
                alt='Image Eleven'
              />
              <Carousel.Caption>
                <div id='carousel-divider4'>
                  <h3 id='carousel-text'>
                    These actions, both direct and indirect, are causing great
                    change to our planet and in various ways; such as climate
                    change, habitat destruction and large-scale biodiversity
                    loss.
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className='d-block w-100'
                src='/images/fig12.png'
                alt='Image Twelve'
              />
              <Carousel.Caption>
                <div id='carousel-divider3'>
                  <h3 id='carousel-text'>
                    There exists a current working theory that the world has
                    undergone five mass extinctions, in which the majority of
                    the species on earth were lost, and that the world is
                    currently undergoing the sixth one.
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className='d-block w-100'
                src='/images/fig13.png'
                alt='Image Thirteen'
              />
              <Carousel.Caption>
                <div id='carousel-divider1'>
                  <h3 id='carousel-text'>
                    Maybe it's human caused, maybe not. The concepts we have
                    been discussing seem to show that it is.{' '}
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className='d-block w-100'
                src='/images/fig14.png'
                alt='Image Fourteen'
              />
              <Carousel.Caption>
                <div id='carousel-divider1'>
                  <h3 id='carousel-text'>
                    If we do not do anything about it, humanity may not survive
                    this event and the consequences of our actions.{' '}
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className='d-block w-100'
                src='/images/fig15.png'
                alt='Image Fifteen'
              />
              <Carousel.Caption>
                <div id='carousel-divider4'>
                  <h3 id='carousel-text'>
                    Returning to our map, this data serves as a simple way to
                    come to terms with the vast amount of damage we have already
                    done and that something needs to be done.
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    )
  }
}

export default InfoGraphics
