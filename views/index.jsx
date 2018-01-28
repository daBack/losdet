var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class Index extends React.Component {
    render() {
        return (
            <Layout title={this.props.title}>
                <div className='wrapper'>
                    <div className='question'>
                        <h1>Har du ett problem?</h1>
                    </div>

                    <div className="word-wrapper">
                        <p id='ld1' className='ld1'>Lös det</p>
                        <p id='suck' className='suck'>*Suck*</p>
                        <p id='ld3' className='ld3'>Lös det</p>
                        <p id='ld4' className='ld4'>*Aaaaagh*</p>

                    </div>

                    <div className='losdet-trigger'>
                        <div id='qm' className='losdet'>
                            <p>?</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

Index.propTypes = {
  title: PropTypes.string,
};

module.exports = Index;
