import React from "react"
import "./About.css"
import bioPic from "../assets/meInTrees.jpg"

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm Mark Hobbs, a newly-minted software developer with a passion for coding and problem-solving. After completing an intensive coding bootcamp, I'm excited to take the skills I've learned and apply them to real-world challenges. My journey into tech has been both challenging and rewarding, and I'm eager to continue growing and learning as I start my professional career.
          </p>
          <p>
            My Journey to Software Development
            Before I discovered my love for software development, I worked in Quality Assurance for a payments processing application at a large financial institution, where I developed a strong foundation in critical thinking. But it wasn't until I enrolled in The Ohio State University College of Engineering Coding Bootcamp that I truly found my passion for technology. The immersive, hands-on learning experience taught me not just how to write code, but also how to think like a developer—solving problems, debugging, and continuously improving my work.

            During the bootcamp, I had the opportunity to work on a variety of projects, both individually and in teams. These experiences taught me how to build full-stack applications, develop clean and maintainable code, and work in an Agile development environment. Now that I've graduated, I'm excited to bring my knowledge to the industry and continue building software that makes a difference.
            <p>
              My Approach
              As a developer, I believe in writing clean, maintainable code, and I understand the importance of continuous learning. I'm motivated by solving problems and enjoy the challenge of improving my coding skills with every new project I take on. My bootcamp experience taught me how to work in an Agile environment, collaborating with team members, seeking feedback, and iterating on solutions.

              I'm also passionate about working with others, whether it's through pair programming, code reviews, or discussing best practices. Collaboration is key to developing better software, and I always seek to learn from the diverse perspectives of my peers.
            </p>
            <p>
              Looking Ahead
              While I'm at the beginning of my career, I'm excited about the journey ahead. I'm eager to apply my skills in real-world settings, continue to learn and grow as a developer, and contribute to building impactful software. I'm particularly interested in [mention any specific areas you'd like to specialize in, such as web development, mobile apps, or a particular tech stack] and am committed to staying up-to-date with the latest industry trends and best practices.

              I'm currently looking for opportunities where I can continue to build my skills, collaborate with experienced developers, and contribute to meaningful projects. If you're interested in connecting or have a project where I can add value, feel free to reach out!

              You can contact me on the Contact page, or reach out to me on one of my social media links below. I look forward to hearing from you!
            </p>
          </p>
        </div>
        <div className="about-image">
          <img src={bioPic} alt="Mark" />
        </div>
      </div>
    </section>
  )
}

export default About;
