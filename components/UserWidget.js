import styled from 'styled-components';

// TODO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const user = {
    position: 'absolute',
    bottom: 50,
    left: 100,
    display: 'flex'
};

const imgWrapper = {
    borderRadius: '50%'
};

const img = {
    width: '100%',
    borderRadius: '50%'
};

const userInfoWrapper = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 0 0 15px'
};

const borderBlock = {
    borderLeft: '1px solid #fff'
};

const author = {
    padding: '0 0 0 15px',
    color: '#fff',
    fontSize: 30,
    textTransform: 'uppercase',
    fontFamily: 'ProximaNovaRegular'
};

const position = {
    padding: '0 0 0 15px',
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
    fontFamily: 'ProximaNovaLight'
};

const userSmall = {
    position: 'absolute',
    bottom: 5,
    left: 15,
    display: 'flex'
};

const imgWrapperSmall = {
    maxWidth: 50
};

const imgSmall = {
    width: '100%',
    borderRadius: '50%'
};

const userInfoWrapperSmall = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 0 0 10px'
};

const borderBlockSmall = {
    borderLeft: '1px solid #fff'
};

const authorSmall = {
    padding: '0 0 0 10px',
    color: '#fff',
    fontSize: 15,
    textTransform: 'uppercase',
    fontFamily: 'ProximaNovaRegular'
};

const positionSmall = {
    padding: '0 0 0 12px',
    color: '#fff',
    fontSize: 10,
    textTransform: 'uppercase',
    fontFamily: 'ProximaNovaLight'
};

const userWidget = (props) => (
    <div style={props.small ? userSmall : user}>
        <div style={props.small ? imgWrapperSmall : imgWrapper}>
            <img style={props.small ? imgSmall : img} src='/static/user.jpg' />
        </div>
        <div style={props.small ? userInfoWrapperSmall : userInfoWrapper}>
            <div style={props.small ? borderBlockSmall : borderBlock}>
                <div style={props.small ? authorSmall : author}>
                    <span>
                        matvey dunuk
                    </span>
                </div>
                <div style={props.small ? positionSmall : position}>
                    <span>
                        graphic designer
                    </span>
                </div>
            </div>
        </div>
    </div>
);

export default userWidget;
