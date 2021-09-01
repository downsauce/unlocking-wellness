import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { useState, useContext } from 'react';
import SearchMain from './SearchMain.js';
import SearchContext from './SearchContext.js';
import styles from '../styles/SearchDrawer.module.css';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const [focus, setFocus] = useState("0");
  const [language, setLanguage] = useState("0");
  const classes = useStyles();

  const { zipCode, changeZip, service, changeService, APIResults, changeSearchResults } = useContext(SearchContext);

  const [state, setState] = useState({ top: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  const searchHandler = (e) => {
    e.preventDefault();

    let searchObj = {
      categories: service,
      location: zipCode};

    axios.get('/api/yelp/category')
      .then(response => changeSearchResults(response.data.businesses))
      .then(() => {
        setState({ top: false })
        console.log(APIResults)
      })
      .catch(err => console.log(err))
    };

    const zipCodeHandler = (e) => {
      e.preventDefault();
      changeZip(e.target.value);
    };

    const serviceHandler = (e) => {
      e.preventDefault();
      changeService(e.target.value);
    };

    const focusHandler = (e) => {
      e.preventDefault();
      setFocus(e.target.value);
    };

    const languageHandler = (e) => {
      e.preventDefault();
      setLanguage(e.target.value);
    };

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Update Search</Button>
          <Drawer className={styles.coverSearch} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
          <section>

              <article className={styles.container}>
                <div>
                  <div className={styles.subTitle}><SearchIcon /> Update your Search:</div>
                  <form onSubmit={searchHandler}>
                    <input
                      id="outlined-error-helper-text"
                      label="Zip Code"
                      value={zipCode}
                      placeholder="Zip Code"
                      className="textField"
                      onChange={zipCodeHandler}
                    />
                    <select className={styles.dropDown} value={service} onChange={serviceHandler}>
                      <option value="0">Select Services</option>
                      <option value="Acupuncture">Acupuncture</option>
                      <option value="Alternative Medicine">Alternative Medicine</option>
                      <option value="Cryotherapy">Cryotherapy</option>
                      <option value="Gender Affirming Care">Gender Affirming Care</option>
                      <option value="Herbal">Herbal Remedies</option>
                      <option value="Hypnosis">Hypnosis</option>
                      <option value="Massage Therapy">Massage Therapy</option>
                      <option value="Meditation">Meditation</option>
                      <option value="Naturopathic/Holistic">Naturopathic/Holistic</option>
                      <option value="Nutritionists">Nutritionists</option>
                      <option value="Reiki">Reiki</option>
                      <option value="Women's Health">Women's Health</option>
                    </select>

                    <select className={styles.dropDown} value={focus} onChange={focusHandler}>
                      <option value="0">Filter By Focus</option>
                      <option value="lgbtq">LGBTQ+</option>
                      <option value="idd">Int./Dev. Disabilities</option>
                      <option value="Women of Color">Women of Color</option>
                      <option value="immigrants">Immigrants</option>
                      <option value="First Nations">First Nations</option>
                      <option value="Women of Color">Women of Color</option>
                    </select>

                    <select className={styles.dropDown} value={language} onChange={languageHandler}>
                      <option value="0">Filter By Language</option>
                      <option value="arabic">Arabic</option>
                      <option value="bengali">Bengali</option>
                      <option value="mandarin">Chinese (Mandarin)</option>
                      <option value="canto">Chinese (Cantonese)</option>
                      <option value="french">French</option>
                      <option value="german">German</option>
                      <option value="hindi">Hindi</option>
                      <option value="japanse">Japanese</option>
                      <option value="Korean">Korean</option>
                      <option value="marathi">Marathi</option>
                      <option value="Portuguese">Portuguese</option>
                      <option value="russian">Russian</option>
                      <option value="sign">Sign Language</option>
                      <option value="spanish">Spanish</option>
                      <option value="turkish">Turkish</option>
                      <option value="vietnamese">Vietnamese</option>
                      <option value="punjabi">Western Punjabi</option>
                    </select>
                    <input
                      type="submit"
                      value="Search Providers"
                      className={styles.searchButton}
                    />
                  </form>
                </div>
              </article>
            </section>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}