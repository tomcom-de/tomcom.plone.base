# -*- coding: utf-8 -*-

import logging
logger = logging.getLogger('tomcom.plone.base')
logger.debug('Installing Product')

from Products.CMFCore.DirectoryView import registerFileExtension
from Products.CMFCore.FSFile import FSFile
from Products.CMFCore import DirectoryView

registerFileExtension('woff', FSFile)
registerFileExtension('eot', FSFile)
registerFileExtension('ttf', FSFile)
registerFileExtension('html', FSFile)
registerFileExtension('map', FSFile)

product_globals = globals()
DirectoryView.registerDirectory('skins', product_globals)

def initialize(context):
    """initialize product (called by zope)"""
