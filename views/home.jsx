const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
        <main>
            <h1>REST-Rant</h1>
            <div>
              <img src="./images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
            </div>
            <div>
              Photo by <a href="https://unsplash.com/es/@crystalweed?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">CRYSTALWEED cannabis</a> on <a href="https://unsplash.com/photos/10DTLp1jKf0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

            </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>

        </main>
    </Def>
  )
}


module.exports = home
