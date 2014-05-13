from plone.app.contentmenu.menu import FactoriesSubMenuItem
from plone.memoize.instance import memoize

@memoize
def _addContext(self):
    if self.context.isPrincipiaFolderish:
        return self.context
    else:
        return self.context_state.folder()

FactoriesSubMenuItem._addContext=_addContext