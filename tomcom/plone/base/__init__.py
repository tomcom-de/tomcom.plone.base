# -*- coding: utf-8 -*-

import logging
logger = logging.getLogger('tomcom.plone.base')
logger.debug('Installing Product')

from Products.CMFCore.DirectoryView import registerFileExtension
from Products.CMFCore.FSFile import FSFile

registerFileExtension('woff', FSFile)
registerFileExtension('eot', FSFile)
registerFileExtension('ttf', FSFile)

def initialize(context):
    """initialize product (called by zope)"""
