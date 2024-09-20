import React, { useEffect, useState } from "react";
import { MixmotionPlayer } from "mixmotion-player";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

const customButtons = [
  /*{ action: "save", align: "right" },*/
  /*{ action: "previous", align: "center" },*/
  { action: "playpause", align: "center" , label: "Play/Pause"},
  { action: "collapse", align: "right" },
  /*{ action: "next", align: "center" },*/
  {
    action: "custom",
    align: "left",
    label: "Back",
    faIcon: faCircleLeft,
    onPress: () => {
     window.history.go(-1);
    },
  }
];

  function Vplayer() {
    const [url, setUrl] = useState("");
    useEffect(() => {
      {
      const params = new URLSearchParams(window.location.search);
      const mix = params.get('mix');
    switch (mix) {
      case 'mix1':
        setUrl("https://www.mixcloud.com/trillionchances/demo/");
        break;
      case 'mix2':
        setUrl("https://www.mixcloud.com/cesarescorcia9/club-edition-podcast-episode-237-mixed-by-cesar-escorcia/");
        break;
    }
  };
    },[]);
    return (<div><MixmotionPlayer url={url} customButtons={customButtons}/>
            </div>);
  }
 
export default Vplayer;