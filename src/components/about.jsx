export const About = (props) => {
  return (
    <div id='about' className='text-center'>

      <div className='container'>
        <br /><br />
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>About us</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
