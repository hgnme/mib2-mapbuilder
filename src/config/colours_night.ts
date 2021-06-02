import routes from './colours/night/routes';
import paths_roads from './colours/night/paths_roads';
import tmc from './colours/night/tmc';
import other from './colours/night/other';


const colours = routes.concat(paths_roads, tmc, other);

export default colours;