import React from 'react'
import { render } from 'react-dom'
import Articele from './Article'
import { articles } from './fixtures'


render(<Articele article={articles[0]} />, document.getElementById('container'));