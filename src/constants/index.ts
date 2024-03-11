import path from 'path';

const DRAWER_WIDTH = 210;
const MIN_WIDTH = 345;
const POST_MAX_WIDTH = 700;

const NAV_HEIGHT = 64;
const HEADER_HEIGHT = 140;

const POST_PER_PAGE = 5;

const THEME_VALUE = 'light';

const POST_DIR = path.join('src/_posts');
const PROJECT_DIR = path.join('src/_projects');

export {DRAWER_WIDTH, NAV_HEIGHT, POST_MAX_WIDTH, THEME_VALUE, POST_DIR, MIN_WIDTH, POST_PER_PAGE, HEADER_HEIGHT, PROJECT_DIR};