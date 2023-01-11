import { jobs } from '../../data/jobs'
import './hero.scss'
import Background from '../../components/background/Background'

export default function Hero(  ) {

    return (
        <section className="hero">
            <Background/>
            <div className="hero__container">
                <div className="hero__subtitle">
                    <span className="hero__subtitle-h">h</span>
                    <span className="hero__subtitle-e">e</span>
                    <span className="hero__subtitle-l">l</span>
                    <span className="hero__subtitle-ll">l</span>
                    <span className="hero__subtitle-o">o</span>
                    <span className="hero__subtitle-virgule">,</span>
                    <span className="hero__subtitle-space">&nbsp;</span>
                    <span className="hero__subtitle-emoji">👋</span>
                    <span className="hero__subtitle-space">&nbsp;</span>
                    <span className="hero__subtitle-i">I</span>
                    <span className="hero__subtitle-apos">&apos;</span>
                    <span className="hero__subtitle-m">m</span>
                </div>
                <div className="hero__title">
                    <h1 className="hero__title-text">Lio Humb</h1>
                </div>
                <div className="hero__job">
                    <h6 className="hero__job-title">
                        <span className="hero__job-title--underscore">_</span>
                        <span className="hero__job-title--text">développeur</span>
                        <div className="hero__job-animation">
                            {jobs.map(job => <span key={job.id} className={`hero__job-animation--${job.id}`}>{job.name}</span>)}
                        </div>
                    </h6>
                </div>
            </div>
        </section>
    )
}