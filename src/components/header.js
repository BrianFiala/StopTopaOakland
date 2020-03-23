import React from "react";

const styles = {
    header: {
        padding: '5px',
        display: 'flex',
        justifyContent: 'space-around',
        background: 'white',
        borderBottom: '3px solid red',
    },
    stopaLogoLink: {
        textDecoration: 'none',
        color: 'initial',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '100px',
    },
    redLetter: {
        color: 'red',
        fontWeight: 'bold',
    },
    logo: {
        width: '80px',
        height: 'auto',
    },
    word: {
        clear: 'both',
        margin: '0',
        padding: '0',
        float: 'left',
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    petition: {
        textDecoration: 'none',
        paddingRight: '10px',
        width: '70px',
        color: 'red',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    petitionText: {
        border: '3px solid red',
        borderRadius: '50px',
        padding: '5px 20px',
    }
}

export default props => {
    return (
        <section style={styles.header}>
            <a style={styles.stopaLogoLink} href="/">
                <img style={styles.logo} src="Stopsign.svg" alt="STOP"></img>
                <aside style={styles.text}>
                    <p style={styles.word}><span style={styles.redLetter}>T</span>aking</p>
                    <p style={styles.word}><span style={styles.redLetter}>O</span>ur</p>
                    <p style={styles.word}><span style={styles.redLetter}>P</span>roperty</p>
                    <p style={styles.word}><span style={styles.redLetter}>A</span>way</p>
                </aside>
            </a>
            <a href="//www.change.org/p/oakland-city-council-oppose-oakland-s-topa-ordinance" style={styles.petition}>
                <span className="hover-button" style={styles.petitionText}>Sign Now!</span>
            </a>
        </section>
    );
};