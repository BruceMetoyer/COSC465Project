import React from 'react';

import {
    CNav,
    CNavItem,
    CNavLink,
} from '@coreui/react';

const Homepage = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', color: '#fff', backgroundColor: '#121212', minHeight: '100vh' }}>
            <div>
                <CNav className="justify-content-center">
                    <CNavItem>
                        <CNavLink href="#" active>
                        Active
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#" disabled>
                        Disabled
                        </CNavLink>
                    </CNavItem>
                </CNav>
            </div>
            {/* Navbar */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#1e1e1e' }}>
                <h1 style={{ fontSize: '24px', color: '#1db954' }}>Music Connect</h1>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <a href="#for-you" style={{ textDecoration: 'none', color: '#fff' }}>For You</a>
                    <a href="#communities" style={{ textDecoration: 'none', color: '#fff' }}>Communities</a>
                    <a href="#friends" style={{ textDecoration: 'none', color: '#fff' }}>Friends</a>
                </div>
            </nav>

            {/* Main Content */}
            <div style={{ padding: '20px' }}>
                <section id="for-you" style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: '#1db954' }}>For You</h2>
                    <p>Discover new music tailored to your taste.</p>
                    {/* Add your recommendation logic here */}
                    <div style={{ display: 'flex', gap: '20px', overflowX: 'scroll' }}>
                        {/* Example song cards */}
                        <div style={{ width: '200px', backgroundColor: '#282828', padding: '10px', borderRadius: '8px' }}>
                            <img src="https://via.placeholder.com/150" alt="Album Art" style={{ width: '100%', borderRadius: '4px' }} />
                            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Song Title</p>
                            <p>Artist Name</p>
                        </div>
                        {/* Repeat similar song cards */}
                    </div>
                </section>

                <section id="communities" style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: '#1db954' }}>Communities</h2>
                    <p>Join or create communities to share music with friends.</p>
                    {/* Add community logic or links */}
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <button style={{ padding: '10px 20px', backgroundColor: '#1db954', color: '#fff', border: 'none', borderRadius: '4px' }}>Create a Community</button>
                        <button style={{ padding: '10px 20px', backgroundColor: '#1e1e1e', color: '#fff', border: '1px solid #1db954', borderRadius: '4px' }}>Browse Communities</button>
                    </div>
                </section>

                <section id="friends" style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: '#1db954' }}>Friends</h2>
                    <p>See what your friends are listening to.</p>
                    {/* Add friends logic */}
                    <div style={{ display: 'flex', gap: '20px', overflowX: 'scroll' }}>
                        {/* Example friend activity */}
                        <div style={{ width: '200px', backgroundColor: '#282828', padding: '10px', borderRadius: '8px' }}>
                            <p style={{ fontWeight: 'bold' }}>John Doe</p>
                            <p>Listening to: Song Title</p>
                        </div>
                        {/* Repeat similar friend activity cards */}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Homepage;