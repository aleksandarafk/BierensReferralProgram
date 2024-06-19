import './how-does-it-work.css' // Importing the CSS

// Importing the images needed for the How Does it Work section of the Landing page
import signupImage from './assets/signupshare.png'
import qualifyImage from './assets/qualify.png'
import cupImage from './assets/cup.png'
import progressImage from './assets/progress.png'


// Creating the component for the How Does it Work section of the Landing page
function Howdoesitwork () {
    return (
      <div id='section2_container'>
          <p id='section2_title'> How does it <c>work?</c> </p>
          <p id='section2_description'> With our straightforward referral process, Bierens referral program gives you added value while you have fun</p> {/* The text below the How Does it Work title */}
          
          <div id='cards_container'> {/* Container for the cards that show the steps */}

              <div className='cards_row'> {/* Including two cards per row - one big and one small card */}
                  <div className='small_card'>
                      <div className='card_description' id='description1'> {/* The text in the card */}
                          <div className='bullet_number'>
                            <p>1</p>
                          </div>
                          <p className='card_title'>Sign up and share</p>
                          <p>Sign up and share your unique referral URL with sides interested in using Bierens.</p>
                      </div>
                      <img className='infoImage' src={signupImage} alt="A person signing up" />

                  </div>

                  <div className='big_card'>
                      <div className='card_description' id='description2'> {/* The text in the card */}
                          <div className='bullet_number'>
                            <p>2</p>
                          </div>
                          <p className='card_title'>We check your referral</p>
                          <p>We will evaluate your referral to make sure they can benefit from us and we can benefit from them.</p>
                      </div>
                      <img className='infoImage' src={qualifyImage} alt="Evaluating image" />
                  </div>
              </div>
              
              <div className='cards_row'>
                  <div className='big_card' id='rewards_card'>
                      <div className='card_description'> {/* The text in the card */}
                          <div className='bullet_number'>
                            <p>3</p>
                          </div>
                          <p className='card_title'>You earn rewards</p>
                          <p>Once they sign up, you will get rewarded.</p>
                      </div>
                      <img className='infoImage' src={cupImage} alt="Reward" />
                  </div>

                  <div className='small_card' id='progress_card'>
                      <div className='card_description'> {/* The text in the card */}
                          <div className='bullet_number'>
                            <p>4</p>
                          </div>
                          <p className='card_title'>Earn bonus rewards</p>
                          <p>Submit more referrals to reach milestones and earn exclusive bonus rewards.</p>
                      </div>
                      <img className='infoImage' id='progressImage' src={progressImage} alt="Progress Image" />
                  </div>
              </div>      
          </div>
      </div>  
    );
}

export default Howdoesitwork; // Exporting the component for the How Does it Work section of the Landing page so that it can be (re)used