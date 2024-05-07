import LeftNavButton from "../../components/LeftNavButton";
import Logo from "../../components/Logo";
import MovieIcon from "../../resources/movie.png";
import LikeIcon from "../../resources/like.png";
import CalenderIcon from "../../resources/calendar.png";
import ArrowIcon from "../../resources/arrow.png";
import UsersIcon from "../../resources/users.png";
import SocialIcon from "../../resources/message-circle.png";
import SettingsIcon from "../../resources/sliders.png";
import LogoutIcon from "../../resources/log-out.png";
import TokyoTrain from "../../resources/TokyoTrain.png";
import "./Home.css";
import Card from "../../components/Card/Card";

function Home() {
  return (
    <div className="main-container">
      <div className="left-navigation-bar">
        <Logo />
        <div className="left-navigation-bar-up-item-container">
          <LeftNavButton text={"Home"} icon={MovieIcon} isActive={true} />
          <LeftNavButton text={"Favourites"} icon={LikeIcon} />
          <LeftNavButton text={"Trending"} icon={ArrowIcon} />
          <LeftNavButton text={"Coming Soon"} icon={CalenderIcon} />
        </div>
        <div className="left-navigation-bar-middle-item-container">
          <LeftNavButton text={"Community"} icon={UsersIcon} />
          <LeftNavButton text={"Social"} icon={SocialIcon} />
        </div>
        <div className="left-navigation-bar-down-item-container">
          <LeftNavButton text={"Settings"} icon={SettingsIcon} />
          <LeftNavButton text={"Logout"} icon={LogoutIcon} />
        </div>
      </div>
      <div className="content">
        <div className="content-header"></div>
        <div className="content-trending">
          <h2>Trending</h2>
          <div className="trending-container">
            <Card
              name={"Tokyo Train"}
              year={2022}
              genre={"Action comedy"}
              imgSrc={TokyoTrain}
            />
            <Card
              name={"Tokyo Train"}
              year={2022}
              genre={"Action comedy"}
              imgSrc={TokyoTrain}
            />
            <Card
              name={"Tokyo Train"}
              year={2022}
              genre={"Action comedy"}
              imgSrc={TokyoTrain}
            />
            <Card
              name={"Tokyo Train"}
              year={2022}
              genre={"Action comedy"}
              imgSrc={TokyoTrain}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
