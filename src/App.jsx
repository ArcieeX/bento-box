import "./App.css";
import stars from "./assets/illustration-five-stars.webp";
import btn from "./assets/illustration-create-post.webp";
import aics from "./assets/illustration-ai-content.webp";
import status from "./assets/illustration-grow-followers.webp";
import grow from "./assets/illustration-schedule-posts.webp";
import growing from "./assets/illustration-consistent-schedule.webp";
import icons from "./assets/illustration-multiple-platforms.webp";
import emojis from "./assets/illustration-audience-growth.webp";

export default function App() {
  return (
    <div className="grid">
      <div className="one">
        <p>
          Create and Schedule Content
          <span style={{ color: "#7551DC" }}> quicker.</span>
        </p>
        <img src={btn} alt="create button img" className="btn" />
      </div>
      <div className="two">
        <p className="txt">
          Social Media <span style={{ color: "#FFCC6A" }}>10x</span> Faster <span>with AI</span> 
        </p>
        <img src={stars} alt="five stars" />
        <div className="two-item">
          <p className="two-sm">over 4,000 5-star reviews</p>
        </div>
      </div>

      <div className="three">
        <p>Write your content using AI</p>
        <img src={aics} alt="path-to-ai" />
      </div>
     
      <div className="four">
        <img src={icons} alt="" />
        <p>Manage multiple accounts and platforms</p>
      </div>
      <div className="b">
        <p>
          Maintaining a consistent <br /> posting schedule{" "}
        </p>
        <img src={growing} alt="" />
      </div>

  
     

      <div className="five">
        <p> <span> 56%</span>
        faster audience growth</p>
        <img src={emojis} alt="" />
      </div>

      <div className="six">
        <img src={status} alt="" />
        <p>Grow followers with non-stop content.</p>
      </div>
      <div className="seven">
        <p>Schedule to social media.</p>
        <img src={grow} alt="" />
        <p
          style={{
            width: "279px",
            height: "60px",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "20px",
            textAlign: "center",
          }}
        >
          Optimize post timings to publish content at the perfect time for your
          audience
        </p>
      </div>
    </div>
  );
};


