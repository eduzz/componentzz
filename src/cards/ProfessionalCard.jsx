

import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/professional_card.css';
import front from '../../assets/img/front.jpg';
import back from '../../assets/img/back.jpg';

class ProfessionalCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({ flipped: !this.state.flipped });
    }
    render() {
        let { name, profession, phone, email, site } = this.props;
        return (
            <div className="container" onClick={this.onClick}>
                <div className={this.state.flipped ? 'card flipped' : 'card'}>
                    <figure className="front">
                        <img src={front} alt="front"></img>
                        <div className="caption">
                            <h2>{name}</h2>
                            <p>{profession}</p>
                            <a>View more</a>
                        </div>
                    </figure>

                    <figure className="back">
                        <img src={back} alt="back" />
                        <div className="caption">
                            <dl>
                                <dt>Phone</dt>
                                <dd>{phone}</dd>
                                <dt>Email</dt>
                                <dd>{email}</dd>
                                <dt>Web</dt>
                                <dd>{site}</dd>
                            </dl>
                        </div>
                    </figure>
                </div>
            </div>
        );
    }
}


ProfessionalCard.propTypes = {
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
};

export default ProfessionalCard;
