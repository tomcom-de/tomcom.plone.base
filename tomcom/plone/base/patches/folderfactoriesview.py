from plone.memoize.instance import memoize
from plone.app.content.browser.folderfactories import FolderFactoriesView
from zope.component import getMultiAdapter

@memoize
def add_context(self):
    context = self.context
    context_state = getMultiAdapter((context, self.request),
                                    name='plone_context_state')
    print '____'
    if context.isPrincipiaFolderish:
        return context
    else:
        return context_state.folder()

FolderFactoriesView.add_context=add_context