// Function to load Home content
function loadHome() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <section id="home">
            <h2 class="section-heading">Welcome to Career</h2>
            <div class="video-container">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229144731/d1.webp" class="images">
                <div class="video-description">
                    <div class="channel-dp-container-2">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229150325/dm1.jpeg" class="channel-dp-2">
                    </div>
                    <div class="video-details">
                        <a href="#" class="video-title">Top Career Opportunities</a>
                        <a href="#" class="channel-name">Career Hub</a>
                        <a href="#" class="views">1.5M views</a>
                        <i class="fas fa-circle"></i>
                        <a href="#" class="time">2 weeks ago</a>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Function to load Entrepreneurship & Business content
function loadEntrepreneurship() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <section id="entrepreneurship">
            <h2 class="section-heading">Entrepreneurship & Business</h2>
            <!-- Spotlight Section -->
            <div class="spotlight">
                <div class="spotlight-container">Ad 1</div>
                <div class="spotlight-container">Ad 2</div>
                <div class="spotlight-container">Ad 3</div>
            </div>
            <!-- Section 1: Law, Finance, Taxes, Government Schemes -->
            <div class="section">
                <h3>Law, Finance, Taxes, Government Schemes</h3>
                <div class="video-container">
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229144731/d1.webp" class="images">
                    <div class="video-description">
                        <div class="channel-dp-container-2">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229150325/dm1.jpeg" class="channel-dp-2">
                        </div>
                        <div class="video-details">
                            <a href="#" class="video-title">Starting Your Own Business</a>
                            <a href="#" class="channel-name">Business Daily</a>
                            <a href="#" class="views">1.5M views</a>
                            <i class="fas fa-circle"></i>
                            <a href="#" class="time">2 weeks ago</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Section 2: Projects (Practice, Research) -->
            <div class="section">
                <h3>Projects (Practice, Research)</h3>
                <div class="video-container">
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229145100/d2.webp" class="images">
                    <div class="video-description">
                        <div class="channel-dp-container-2">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229150542/dm2.webp" class="channel-dp-2">
                        </div>
                        <div class="video-details">
                            <a href="#" class="video-title">Scaling Your Startup</a>
                            <a href="#" class="channel-name">Startup World</a>
                            <a href="#" class="views">800K views</a>
                            <i class="fas fa-circle"></i>
                            <a href="#" class="time">1 month ago</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Section 3: Student Initiatives, Startups, Incubators, Schemes -->
            <div class="section">
                <h3>Student Initiatives, Startups, Incubators, Schemes</h3>
                <div class="video-container">
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229145216/d3.jpeg" class="images">
                    <div class="video-description">
                        <div class="channel-dp-container-2">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229150325/dm1.jpeg" class="channel-dp-2">
                        </div>
                        <div class="video-details">
                            <a href="#" class="video-title">Introduction to AI</a>
                            <a href="#" class="channel-name">Tech World</a>
                            <a href="#" class="views">2M views</a>
                            <i class="fas fa-circle"></i>
                            <a href="#" class="time">1 month ago</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Add similar functions for other sections (loadIT, loadLaw, loadPolitics, loadMarketing, loadFashion, loadInternships)