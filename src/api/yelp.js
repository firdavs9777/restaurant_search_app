import axios from 'axios';

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: { 
    Authorization: 
	"Bearer 6h4M1VTdSUZFPiPHwa1jNOsNwyvP-42ZvTdfsGQw3e-rgyYYvJ32S2gwLuitBJDwcj6K_uyPJzAJ56GtvPeorHakAqoiShie6MBeE24KGLEIzvtCbhjtLY291YWXX3Yx"
  }
});

// https://api.yelp.com/v3/businesses