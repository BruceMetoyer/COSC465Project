import React from 'react';
import {
    CNav,
    CNavItem,
    CNavLink,
} from '@coreui/react';
import '/Users/brucey/COSC/COSC465-new-project /react-app/src/homepage.css';

const Homepage = () => {
    return (
        <div className="homepage-container">
            <CNav className="navbar">
                <CNavItem>
                    <CNavLink href="#popular" active className="nav-link">Popular</CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink href="#communities" className="nav-link">Communities</CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink href="#friends" className="nav-link">Friends</CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink href="#genres" className="nav-link">New Sound</CNavLink>
                </CNavItem>
            </CNav>

            <div className="content">
                <section id="popular" className="section">
                    <h2><u>Popular</u></h2>
                    <p>Discover some of the hottest songs right now.</p>
                    <div className="card-container">
                        <div className="card">
                            <img src="img/AllIWANTFORCHRIST.465.jpeg" alt="Album Art" className="card-image" />
                            <p className="card-title"><b>All I Want For Christmas Is You</b></p>
                            <p className="card-artist"><i>Mariah Carey</i></p>
                        </div>
                        <div className="card">
                            <img src="img/Single_Brenda_Lee-Rockin'_Around_the_Christmas_Tree_cover.465.jpg" alt="Album Art" className="card-image" />
                            <p className="card-title"><b>Rockin' Around The Christmas Tree</b></p>
                            <p className="card-artist"><i>Brenda Lee</i></p>
                        </div>
                        <div className="card">
                            <img src="img/LastChristmas.465.jpeg" alt="Album Art" className="card-image" />
                            <p className="card-title"><b>Last Christmas</b></p>
                            <p className="card-artist"><i>Wham!</i></p>
                        </div>
                        <div className="card">
                            <img src="img/Kendrickgnx.465.webp" alt="Album Art" className="card-image" />
                            <p className="card-title"><b>TV Off</b></p>
                            <p className="card-artist"><i>Kendrick Lamar Featuring Lefty Gunplay</i></p>
                        </div>
                        <div className="card">
                            <img src="img/jinglebellrock.465.jpeg" alt="Album Art" className="card-image" />
                            <p className="card-title"><b>Jingle Bell Rock</b></p>
                            <p className="card-artist"><i>obby Helms</i>B</p>
                        </div>
                        <div className="card">
                            <img src="img/Kendrickgnx.465.webp" alt="Album Art" className="card-image" />
                            <p className="card-title"><b>Luther</b></p>
                            <p className="card-artist"><i>Kendrick Lamar & SZA</i></p>
                        </div>
                    </div>
                </section>

                <section id="communities" className="section">
                    <h2><u>Communities</u></h2>
                    <p>Join or create communities to share music with friends.</p>
                    <div className="button-group">
                        <button className="primary-button">Create a Community</button>
                        <button className="secondary-button">Browse Communities</button>
                    </div>
                </section>

                <section id="friends" className="section">
                    <h2><u>Friends</u></h2>
                    <p>See what your friends are listening to.</p>
                    <div className="card-container">
                        <div className="card">
                            <p className="card-title"><u>Bruce Metoyer</u></p>
                            <p>Listening to: <b>Change</b></p>
                            <p>Artist: <i>J. Cole</i></p>
                        </div>
                        <div className="card">
                            <p className="card-title"><u>Noble Grant</u></p>
                            <p>Listening to: <b>ARE WE STILL FRIENDS</b></p>
                            <p>Artist: <i>Tyler, The Creator</i></p>
                        </div>
                        <div className="card">
                            <p className="card-title"><u>Matthew Akinmolayan</u></p>
                            <p>Listening to: <b>When I Was Your Man</b></p>
                            <p>Artist: <i>Bruno Mars</i></p>
                        </div>
                        <div className="card">
                            <p className="card-title"><u>Bart Minty</u></p>
                            <p>Listening to: <b>I KNOW ?</b></p>
                            <p>Artist: <i>Travis Scott</i></p>
                        </div>
                        <div className="card">
                            <p className="card-title"><u>Christian Cadet</u></p>
                            <p>Listening to: <b>Like Him</b></p>
                            <p>Artist: <i>Tyler, The Creator, Lola Young</i></p>
                        </div>
                        <div className="card">
                            <p className="card-title"><u>Jayden McBean</u></p>
                            <p>Listening to: <b>D.T.B</b></p>
                            <p>Artist: <i>A Boogie Wit da Hoodie</i></p>
                        </div>
                        <div className="card">
                            <p className="card-title"><u>Mathieu Racine</u></p>
                            <p>Listening to: <b>I Hate U</b></p>
                            <p>Artist: <i>SZA</i></p>
                        </div>
                    </div>
                </section>

                <section id="genres" className="section">
                    <h2><u>New Sound</u></h2>
                    <p>Discover other genres.</p>
                    <div className="card-container">
                        <div className="card">
                            <img src="img/rockmusik-1024x1024.465.jpg" alt="Album Art" className="card-image" />
                            <p className="card-genre">Rock</p>
                        </div>
                        <div className="card">
                            <img src="img/pop-musik.465.jpg" alt="Album Art" className="card-image" />
                            <p className="card-genre">Pop</p>
                        </div>
                        <div className="card">
                            <img src="img/hiphop.465.jpg" alt="Album Art" className="card-image" />
                            <p className="card-genre">Hip-hop</p>
                        </div>
                        <div className="card">
                            <img src="img/abstract-7476913_1280.465jazz.webp" alt="Album Art" className="card-image" />
                            <p className="card-genre">Jazz</p>
                        </div>
                        <div className="card">
                            <img src="img/CountryMusic.465.png" alt="Album Art" className="card-image" />
                            <p className="card-genre">Country</p>
                        </div>
                        <div className="card">
                            <img src="img/Classical-Music-800x450.465.jpg" alt="Album Art" className="card-image" />
                            <p className="card-genre">Classical</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Homepage;