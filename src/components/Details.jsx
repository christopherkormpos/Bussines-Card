import React from 'react'
import email from '../images/Mail.png'
import LinkedIn from '../images/linkedin.png'

export default function Details() {
    return (<section className='Details'>
        <h1>Christopher Korbos</h1>
        <h5>Frontend Developer</h5>
        <p className='little-email'>christopher.korbos@gmail.com</p>
        <div className='forms'>
            <form action="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJfnZvhffWTHpbCZwQpTzXVLnzVjGwQtdKkWbmhRRgvkrrmpSGbsJpJfRGJdQQnFFkZcrZg">
                <button className='email'>
                    <img src={email} alt='email'></img>Email</button>
            </form>
            <form action="https://www.linkedin.com/in/christopher-kormpos-27808b194/">
                <button className='LinkedIn'>
                    <img src={LinkedIn} alt="linkedin-icon" />
                    LinkedIn</button>
            </form>
        </div>
        <div>
            <h3>About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div>
            <h3>Interests</h3>
            <p>•    Sports (Basketball, Football, Volleyball, Running) <br />
                •	Astronomy <br />
                •	Photography <br />
                •	Music (Sound Mixing, Vinyl Collecting) <br />
            </p>
        </div>
    </section>
    )
}