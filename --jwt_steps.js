/**
 * install web token
 * jwt.sign(payload, secret, { expiresIn : })
 * token client
 * 
 * 
 */


/**
 * how to store token in the client side 
 * 1. memory --> ok type
 * 2 local storage ==> ok type(xss type)
 * 3. cookie : http only
 */

/**
 * 1. set cookies http only. for develoment secure : false, 
 * 
 * 2. cors 
 * 
 * 
 * app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));
 * 
 * 3. client side axios setting 
 * in axios 
 */