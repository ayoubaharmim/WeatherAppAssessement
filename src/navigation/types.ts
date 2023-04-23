import {MainParamList} from './root-navigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainParamList {}
  }
}
