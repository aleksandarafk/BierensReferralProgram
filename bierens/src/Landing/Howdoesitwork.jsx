import './style.css'

function Howdoesitwork () {
    return (
      <div id='section2_container'>
          <p id='section2_title'> How does it <c>work?</c> </p>
          <p id='section2_description'> Bierens referral program strives to make it easier for you, enhancing transparency in the referral process </p>
          
          <div id='cards_container'>
              <div className='cards_row'>
                  <div className='small_card'>
                      <div className='card_description'>
                          <div className='bullet_number'>
                            <p>1</p>
                          </div>
                          <p className='card_title'>Sign up and share</p>
                          <p>Sign up and share your unique referral URL.</p>
                      </div>

                  </div>

                  <div className='big_card'>
                      <div className='card_description'>
                          <div className='bullet_number'>
                            <p>2</p>
                          </div>
                          <p className='card_title'>We qualify your lead</p>
                          <p>We will qualify your referral to make sure they can benefit from us.</p>
                      </div>
                  </div>
              </div>
              
              <div className='cards_row'>
                  <div className='big_card'>
                      <div className='card_description'>
                          <div className='bullet_number'>
                            <p>3</p>
                          </div>
                          <p className='card_title'>You earn rewards</p>
                          <p>Once they sign up, you will get rewarded.</p>
                      </div>
                  </div>

                  <div className='small_card'>
                      <div className='card_description'>
                          <div className='bullet_number'>
                            <p>4</p>
                          </div>
                          <p className='card_title'>Earn bonus rewards</p>
                          <p>Submit more referrals to reach milestones and earn exclusive bonus rewards.</p>
                      </div>
                  </div>
              </div>      
          </div>
      </div>  
    );
}

export default Howdoesitwork;