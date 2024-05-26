import './style.css'
import signupImage from './assets/signupshare.png'
import qualifyImage from './assets/qualify.png'
import cupImage from './assets/cup.png'
import progressImage from './assets/progress.png'

function Howdoesitwork () {
    return (
      <div id='section2_container'>
          <p id='section2_title'> How does it <c>work?</c> </p>
          <p id='section2_description'> Bierens referral program strives to make it easier for you, enhancing transparency in the referral process </p>
          
          <div id='cards_container'>
              <div className='cards_row'>
                  <div className='small_card'>
                      <div className='card_description' id='description1'>
                          <div className='bullet_number'>
                            <p>1</p>
                          </div>
                          <p className='card_title'>Sign up and share</p>
                          <p>Sign up and share your unique referral URL.</p>
                      </div>
                      <img className='infoImage' src={signupImage} alt="A person signing up" />

                  </div>

                  <div className='big_card'>
                      <div className='card_description' id='description2'>
                          <div className='bullet_number'>
                            <p>2</p>
                          </div>
                          <p className='card_title'>We qualify your lead</p>
                          <p>We will qualify your referral to make sure they can benefit from us.</p>
                      </div>
                      <img className='infoImage' src={qualifyImage} alt="Evaluating image" />
                  </div>
              </div>
              
              <div className='cards_row'>
                  <div className='big_card' id='rewards_card'>
                      <div className='card_description'>
                          <div className='bullet_number'>
                            <p>3</p>
                          </div>
                          <p className='card_title'>You earn rewards</p>
                          <p>Once they sign up, you will get rewarded.</p>
                      </div>
                      <img className='infoImage' src={cupImage} alt="Reward" />
                  </div>

                  <div className='small_card' id='progress_card'>
                      <div className='card_description'>
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

export default Howdoesitwork;