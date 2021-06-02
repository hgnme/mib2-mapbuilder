import routes from './colours/day/routes';
import paths_roads from './colours/day/paths_roads';
import tmc from './colours/day/tmc';
import other from './colours/day/other';

const colours = routes.concat(paths_roads, tmc, other);

export default colours;